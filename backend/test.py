import FirebaseAuth
from firebase_admin import auth

# user = auth.create_user(
#     email='user@example.com',
#     email_verified=False,
#     password='secretPassword',
#     display_name='John Doe',
#     disabled=False)
# print('Successfully fetched user data: {0}'.format(user.uid))

user = auth.get_user('Ot43OM7k4mOhmU7QbNSDsEbInvY2')
print(user.photo_url)