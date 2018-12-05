import FirebaseAuth
from firebase_admin import auth
from firebase_admin import db
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
uid = 'vOUdm99aX3NersgPYiECRR5o7gq2'

user = auth.get_user(uid)
print(user.photo_url)
# #
# custom_token = auth.create_custom_token(uid)
# print(custom_token)
#
# decoded_token = auth.verify_id_token(id_token)
# uid = decoded_token['uid']

# def getData(path):
#     ref = db.reference(path)
#     return ref.get()
#
#
# # ref = db.reference('/').get()
# path = getData('/users')
# print(path)
