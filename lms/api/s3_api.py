import frappe
from lms.utils.s3 import S3Client

@frappe.whitelist()
def create_bucket(bucket_name):
    s3_client = S3Client()
    return s3_client.create_bucket(bucket_name)

@frappe.whitelist()
def upload_file(bucket_name, file_path, object_name):
    s3_client = S3Client()
    return s3_client.upload_file(bucket_name, file_path, object_name)

@frappe.whitelist()
def list_objects(bucket_name):
    s3_client = S3Client()
    objects = s3_client.list_objects(bucket_name)
    return [obj['Key'] for obj in objects]

@frappe.whitelist()
def delete_object(bucket_name, object_name):
    s3_client = S3Client()
    return s3_client.delete_object(bucket_name, object_name)