# Esme Goral QA Sprint/project 7 


Documents used as refernace:
API Doc- - https://cnt-8c80fddb-3e2c-4be8-b9d2-bc53fca33b2d.containerhub.tripleten-services.com/docs/#api-Main.Products

Swagger - https://cnt-8c80fddb-3e2c-4be8-b9d2-bc53fca33b2d.containerhub.tripleten-services.com/api/swagger/#/Kits%20API/KitServiceRemoveKit


Platforms used:
Postman,
Vcode, (or 
command prompt(cmd) as a preferance)


Description of project-We are creating codes to the run the server link and API to make sure the postman statuses and body responses pass as they should and or 
catch any bugs along the way. 


Cloning to local drive and Installing :
Once the files has been cloned to your local device(use cmd platform and use code-git clone "http link from github").
open the folder hm07-qa-us,(keep this open you will use it alot) and go to the folder tests, then you will see 4 files named getHandlers.test.js,postHandlers.test.js,putHandlers.test.js,and deleteHandlers.test.js. click on getHandlers.tests.js, then right click and open with notepad. Notepad opens and you will see 2 test codes,(This action applies to all 4 files.) make sure to hit file and save, this way it automatically saves it to your Vcode platform for easy access to view code.
Go back to the folder hm07-qa-us, navidagte to the top where the folder is located type cmd and the command promtpt will open. Now we need to Install npm install then enter, then npx jest then enter,then now we can access the files. I choose to use Vcode as my platform.


Starting server line + Running the tests in Vcode:
Before we can run the files we need to start our server link,go to folder hm07-qa-us, and right click on file config.js and open with notepad. next deploy your server link at Tripleten platform copy link and paste the new link to the config.js and save. (you will keep doing this from time to time since the server will expire)


Running tests in vcode:
open Vcode download the folder hm07-qa-us, then files should of automatically download (getHandlers.test.js,postHandlers.test.js,putHandlers.test.js,and deleteHandlers.test.js) Open getHandelers, the code should be already there and run it using debug and then in the terminal run code npx jest getHandlers.test.js
both test should pass, now do this to all the files in Vcode using the same code npx jest postHandlers.test.js, then npx jest putHandlers.test.js and lastley npx jest deleteHandlers.test.js. Now to run all files at the same time use code npx jest all files should pass should give you 4 test suites passed and 8 tests passed.



Postman for only putHandlers.test.js and deleteHandlers.test.js:

For putHandlers.test.js:
We need to create a kit first, select POST insert server link/api/v1/kits 
and add your body 
{
  "name": "Esme Project 7 kit",
  "cardId": 1
}


Next we need to add prodcuts to kit,select POST insert serverlink/api/v1/kits/7/products
{
    "productsList": [
        {
            "id": 1,
            "quantity": 1
        },
        {
            "id": 6,
            "quantity": 1
        }
    ]
}

Lastley we need to do some changes so select PUT insert serverlink/api/v1/kits/7
and then add your body.


{ "productsList": [
        {
            "id": 1,
            "quantity": 1
        }
    ]}



Now for deleteHandlers.test.js we need to delete the kit so select Delete serverlink/api/v1/kits/7
the body is empty and should return 200 ok response OK:TRUE


After running the code in vcode for deleteHandlers.test.js go back to postman recreat your kit, add prodcuts and do the changes so the putHandlers.test.js runs smoothly when we run npx jest.





















