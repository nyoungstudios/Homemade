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
uid = 'RIVFej4v7mZVK6WRm43pHkSV1FE3'

user = auth.get_user(uid)
print(user.photo_url)
#
# custom_token = auth.create_custom_token(uid)
# print(custom_token)

