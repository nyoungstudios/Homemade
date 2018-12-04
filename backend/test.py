import FirebaseAuth
from firebase_admin import auth
#
# user = auth.create_user(
#     email='user@example.com',
#     email_verified=False,
#     password='secretPassword',
#     display_name='John Doe',
#     disabled=False)
# print('Successfully fetched user data: {0}'.format(user.uid))
# print('Successfully fetched user data: {0}'.format(user))
#
uid = 'Ot43OM7k4mOhmU7QbNSDsEbInvY2'

# user = auth.get_user(uid)
# print(user.email)
#
# custom_token = auth.create_custom_token(uid)
# print(custom_token)

id_token = 'eyJ0eXAiOiAiSldUIiwgImFsZyI6ICJSUzI1NiIsICJraWQiOiAiYjdmYzQ5YjhjZjA2YmVhODk4YjM4YmU4MmFhOWExMDIyZjViNGJiMyJ9.eyJpc3MiOiAiZmlyZWJhc2UtYWRtaW5zZGstdHo0eG9AaG9tZW1hZGUtY3Vpc2luZS5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsICJzdWIiOiAiZmlyZWJhc2UtYWRtaW5zZGstdHo0eG9AaG9tZW1hZGUtY3Vpc2luZS5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsICJhdWQiOiAiaHR0cHM6Ly9pZGVudGl0eXRvb2xraXQuZ29vZ2xlYXBpcy5jb20vZ29vZ2xlLmlkZW50aXR5LmlkZW50aXR5dG9vbGtpdC52MS5JZGVudGl0eVRvb2xraXQiLCAidWlkIjogIk90NDNPTTdrNG1PaG1VN1FiTlNEc0ViSW52WTIiLCAiaWF0IjogMTU0Mzg5Mzg5NSwgImV4cCI6IDE1NDM4OTc0OTV9.u-XlJEEDGoaMcYQuppl3jyxBkP515mYhK87VZXz0S3DFrnmkuaz0OKNgErmWBcdiirR86p01k6zmZHkLKQDA4XCltrncmCh8IhuHN6LJAV6zkRBqqn_BQLpiT16IXH6dasFoB5V-9p5zE36WnoXeL7r1EYjGc9bHFY6Bfzn6PxUcXAV1VM40yTGHj3KgjzquoZnmX_npIP2Sn5U6BqkJ9mRZ76QILfDdXp6f-H8oKJA-8tzRz_1WZ54qGY6_2dL98BDUpUIDNU2OIIjUh6pOmk5zgwbxcDgAGlP2GtkYUHXG6yAHhJq7RfCoJnIxqYuqAxxFGnn14VbvU_kd5bC6Kg=='

decoded_token = auth.verify_id_token(id_token)
uid = decoded_token['uid']
print(uid)

