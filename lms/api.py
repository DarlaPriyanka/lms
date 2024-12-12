import frappe
from frappe import _
from frappe.utils import today
from frappe.utils.data import date_diff

@frappe.whitelist(allow_guest=False)  
def get_courses_for_instructor(mentor,status):
    instructor = frappe.get_all(
        'LMS Course Mentor Mapping',
        filters={
            'mentor': mentor,
        },
        fields=['mentor']
    )

    if not instructor:
        return 'error'

    instructor_id = instructor[0].mentor

    courses_query = frappe.db.sql("""
    SELECT DISTINCT c.name AS course_name,
           c.description AS course_description,
           c.active_status AS active_status,
           c.status AS status,
           cm.name AS mentor_name,
           cm.mentor AS mentor_email
    FROM `tabLMS Course` AS c
    JOIN `tabLMS Course Mentor Mapping` AS cm ON c.name = cm.course
    WHERE cm.mentor = %s AND c.status = %s
""", (instructor_id,status), as_dict=True)

    return courses_query

@frappe.whitelist(allow_guest=False) 
def get_popular_courses():

    popular_courses = frappe.db.sql("""
        SELECT
            course.name AS courseId,
            course.title AS courseName,
            course.description AS courseDescription,
            course.status AS status,
            course.active_status AS activeStatus,
            COUNT(DISTINCT course_instruction.mentor) AS instructorCount,
            COUNT(DISTINCT enrollment.member) AS studentCount,
            COUNT(DISTINCT module.name) AS moduleCount    
        FROM
            `tabLMS Course` AS course
        LEFT JOIN
            `tabLMS Course Mentor Mapping` AS course_instruction ON course.name = course_instruction.course
        LEFT JOIN
            `tabLMS Enrollment` AS enrollment ON course.name = enrollment.course
        LEFT JOIN
            `tabCourse Chapter` AS module ON course.name = module.course 
        GROUP BY
            course.name, course.title, course.description, course.status, course.active_status         
        HAVING
            studentCount > 0
        ORDER BY
            studentCount DESC
        LIMIT 8
    """, as_dict=True)

    return popular_courses


@frappe.whitelist(allow_guest=True)
def get_instructor_students_counts( instructor_id):
    student_count = frappe.db.count('LMS Enrollment', filters={
        'course': [
            'in', frappe.db.get_all('LMS Course Mentor Mapping', filters={
                'mentor': instructor_id
            }, pluck='course')
        ]
    })

    return student_count

@frappe.whitelist(allow_guest=True)
def get_student_assignments( student_id,course):
    enrollment_date = frappe.db.sql("""
        SELECT enrollment.creation 
        FROM `tabLMS Enrollment` as enrollment
        JOIN `tabUser` as student ON enrollment.member = student.name
        WHERE student.name = %s
        AND enrollment.course = %s
        LIMIT 1
    """, ( student_id,course), as_dict=True)

    if not enrollment_date:
        return []

    enrollment_date = enrollment_date[0]['creation']

    assignments = frappe.db.sql("""
        SELECT 
            assignment.name, 
            assignment.title, 
            assignment.description, 
            assignment.creation, 
            assignment.due_date,
            (SELECT status FROM `tabLMS Assignment Submission` WHERE assignment = assignment.name AND member = %s) AS status,
            (SELECT marks FROM `tabLMS Assignment Submission` WHERE assignment = assignment.name AND member = %s) AS marks                    
        FROM `tabLMS Assignment` as assignment
        LEFT JOIN `tabLMS Assignment Submission` as sa ON sa.assignment = assignment.name
        WHERE assignment.course = %s
        AND assignment.due_date > %s
        GROUP BY assignment.name, assignment.title, assignment.description, assignment.creation, assignment.due_date
    """, (student_id,student_id, course, enrollment_date), as_dict=True)

    return assignments

@frappe.whitelist(allow_guest=True)
def get_due_assignments(student_id):

    enrolled_courses = frappe.get_all('LMS Enrollment', filters={'member': student_id}, fields=['course'])
    course_ids = [course['course'] for course in enrolled_courses]
    if not course_ids:
        return []

    submitted_assignments = frappe.get_all('LMS Assignment Submission', filters={'member': student_id}, fields=['assignment'])
    submitted_assignment_ids = [assignment['assignment'] for assignment in submitted_assignments]

    assignments = frappe.get_all('LMS Assignment', filters={
        'course': ('in', course_ids),
        'name': ('not in', submitted_assignment_ids),
        'due_date': ('>=', today())
    }, fields=['name'])

    return assignments

@frappe.whitelist(allow_guest=True)
def get_latest_assignments(student_id):
    enrolled_courses = frappe.get_all('LMS Enrollment', filters={'member': student_id}, fields=['course'])
    course_ids = [course['course'] for course in enrolled_courses]

    if not course_ids:
        return []

    assignments = frappe.get_all('LMS Assignment', filters={
        'course': ('in', course_ids),
        'due_date': ('>=', today())
    }, fields=['name', 'course', 'due_date','creation','description','title'], order_by='creation desc', limit_page_length=5)

    for assignment in assignments:
        assignment['days_left'] = date_diff(assignment['due_date'], today())

    return assignments

@frappe.whitelist(allow_guest=True)
def get_resources_for_student(student_id):

    resources = frappe.db.sql("""
        SELECT 
            # r.type, 
            r.resouce_upload, 
            r.creation as creation
        FROM 
            `tabLMS Course Resourse` r
        JOIN 
            `tabLMS Enrollment` e ON e.course = r.course
        WHERE 
            e.member = %s
        ORDER BY 
            r.creation DESC
        LIMIT 5
    """, (student_id), as_dict=True)
    
    return resources

import frappe

@frappe.whitelist(allow_guest=True)
def get_instructor_assignments(mentor):
    
    course_ids = frappe.get_all(
        'LMS Course Mentor Mapping',
        filters={'mentor': mentor},  
        fields=['course'] 
    )
    
    course_ids = [course['course'] for course in course_ids]

    assignments = frappe.get_all(
        'LMS Assignment',
        filters={
            'course': ['in', course_ids] 
        },
        fields=['title', 'name', 'due_date', 'upload_assignment', 'course'],
        order_by='due_date desc' 
    )

    for assignment in assignments:
        course_name = frappe.get_value('LMS Course', assignment['course'], 'name')
        assignment['course'] = course_name 

    return assignments





