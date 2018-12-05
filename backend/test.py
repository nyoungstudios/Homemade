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
# uid = 'RIVFej4v7mZVK6WRm43pHkSV1FE3'
#
# user = auth.get_user(uid)
# print(user.photo_url)
# #
# custom_token = auth.create_custom_token(uid)
# print(custom_token)

id_token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjIzNTBiNWY2NDM0Zjc2Y2NiM2IxMTlmZGQ4OGQxMzhjOWFjNTVmY2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaG9tZW1hZGUtY3Vpc2luZSIsIm5hbWUiOiJKb2UgRXhhbXBsZSIsImF1ZCI6ImhvbWVtYWRlLWN1aXNpbmUiLCJhdXRoX3RpbWUiOjE1NDM5NzA5NzMsInVzZXJfaWQiOiJSSVZGZWo0djdtWlZLNldSbTQzcEhrU1YxRkUzIiwic3ViIjoiUklWRmVqNHY3bVpWSzZXUm00M3BIa1NWMUZFMyIsImlhdCI6MTU0Mzk3NDg0MiwiZXhwIjoxNTQzOTc4NDQyLCJlbWFpbCI6ImpvZUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJqb2VAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Qa_mFjbtgZXUHt_Ewy1LGyhLTz8Iiy5H5Uqx-PNXWL520aEekU24K97jYu7PITMijiv1inmVqHkOMXpjumQAOiRA5P7laeq0YiHtPAUjQjoF358VwGfV_SZCZia3qjM5S0Myd3IYd3S45RskHMMfK__mBj1WVm_473k6kUE6jRtUJJJa8BOHtKZV8MIJ1NhbwGhCZFmtl47-azoKSON2ijkYsjO7w322Dd0jxxrwFX8TeAWQ4DmDjohbEOoEhu2jSoeXERrBTOzmLToEy4amLaNmVYEXnemUyRXLdE2tm4qbXMT01vjq7ZMMVzhweoVbMABNLMx8MnXgwp7ag6hxJg'
try:
    decoded_token = auth.verify_id_token(id_token)
    uid = decoded_token['uid']
    print(uid)
except:
    print('hi')

