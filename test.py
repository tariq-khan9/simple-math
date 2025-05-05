import smtplib

server = smtplib.SMTP("smtp.gmail.com", 587)
server.starttls()
server.login("simplestmath.help@gmail.com", "vyx jmbw kvdc jgyi")
print("Logged in successfully!")
