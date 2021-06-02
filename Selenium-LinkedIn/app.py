import time
import os
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager



# driver = webdriver.Chrome(ChromeDriverManager().install())
# add path for chromedriver.exe
options = webdriver.ChromeOptions()
options.add_argument("user-data-dir={}\driver_data".format(os.getcwd()))

driver = webdriver.Chrome(ChromeDriverManager().install(), chrome_options=options)


# Open Linkedin
driver.get("https://www.linkedin.com/login")


# Open invitations page
driver.get("https://www.linkedin.com/mynetwork/invitation-manager/")

# ----------------- Get all the available invitation's ACCEPT Button
acceptButtons = []
while len(acceptButtons)==0:
    acceptButtons = driver.find_elements_by_xpath("//button[@class='invitation-card__action-btn artdeco-button artdeco-button--2 artdeco-button--secondary ember-view']")

# Accept connections by clicking the buttons
for button in acceptButtons:
    button.click()
    time.sleep(5)