import boto3
import frappe
from frappe import throw

class S3Client:
    @frappe.whitelist()
    def __init__(self):
        self.s3 = boto3.client('s3')

    @frappe.whitelist()
    def create_bucket(self, bucket_name):
        try:
            self.s3.create_bucket(Bucket=bucket_name)
            return f'Bucket {bucket_name} created successfully.'
        except Exception as e:
            throw(f'Error creating bucket: {e}')

    @frappe.whitelist()    
    def upload_file(self, bucket_name, file_name, object_name):
        try:
            self.s3.upload_file(file_name, bucket_name, object_name)
            return f'File {file_name} uploaded to {bucket_name}/{object_name} successfully.'
        except Exception as e:
            throw(f'Error uploading file: {e}')

    @frappe.whitelist()
    def list_objects(self, bucket_name):
        try:
            response = self.s3.list_objects_v2(Bucket=bucket_name)
            return response.get('Contents', [])
        except Exception as e:
            throw(f'Error listing objects: {e}')

    @frappe.whitelist()
    def delete_object(self, bucket_name, object_name):
        try:
            self.s3.delete_object(Bucket=bucket_name, Key=object_name)
            return f'File {object_name} deleted from bucket {bucket_name}.'
        except Exception as e:
            throw(f'Error deleting file: {e}')