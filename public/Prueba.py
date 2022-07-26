import time

from selenium import webdriver


browser = webdriver.Firefox(executable_path="./drivers/geckodriver")

browser.get('https://www.facebook.com')

time.sleep(5) # Let the user actually see something!

def LogearFacebook(u,c):
    #Elementos de facebook
    try:
        time.sleep(5)
        login = browser.find_element_by_name("email")
        p = browser.find_element_by_name("pass")
        
        # Llenado de datos
        login.send_keys(u)
        p.send_keys(c)
        login.submit()
         


        return True
    except:
        return False


usuario = "67927279"
contra = "╚╔╩╦╠═╔╩╦╠═"        
LogearFacebook(usuario,contra)