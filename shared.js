/* 
    Name: Daniel Hong
    Version: 1.0
 */



// Keys to be accessed for local storage
const USERS_KEY = "usersKey";
const NOTIFICATIONS_KEY = "notificationsKey";
const CHANGE_REQUESTS_KEY = "changeRequestsKey";
const OLD_REQUESTS_KEY = "oldRequestsKey";

if (typeof(Storage) !== "undefined"){
    console.log("Local storage is available.")
}else{
    console.warn("Local storage is unavailable")
}

/* 
    @desc updates the list of users to the local storage for the given key
    @param 'usersToStorage' - the list of users to be committed to storage
 */
function updateNewUserLocalStorage(usersToStorage){
    localStorage.setItem(USERS_KEY,JSON.stringify(usersToStorage))
}

/* 
    @desc updates the list of notifications to the local storage for the given key
    @param 'notificationToStorage' - the list of notifications to be committed to storage
 */
function updateNotificationsLocalStorage(notificationToStorage){
    localStorage.setItem(NOTIFICATIONS_KEY,JSON.stringify(notificationToStorage))
}

/* 
    @desc updates the list of change requests to the local storage
    @param 'changeRequestsToStorage' - the list of change requests to be committed to storage
 */
function updateChangeRequestsLocalStorage(changeRequestsToStorage){
    localStorage.setItem(CHANGE_REQUESTS_KEY,JSON.stringify(changeRequestsToStorage))
}

/* 
    @desc updates the list of old change requests to the local storage
    @param 'changeOldRequestsToStorage' - the list of old change requests to be committed to storage
 */
function updateOldChangeRequestsLocalStorage(changeOldRequestsToStorage){
    localStorage.setItem(OLD_REQUESTS_KEY,JSON.stringify(changeOldRequestsToStorage))
}

// Global variables which needs to be accessed by different features
var users = [];
var notification = [];
var changeRequests = [];
var oldChangeRequests = [];

/* 
    @desc a class for a user which describes its attributes with methods associated with it
    @param - self explanatory parameters which describes a user's attributes and therefore properties
*/
class User{
    constructor(firstName,lastName,userName,password,department,level,companyEmail,companyPhone,mobileNo,locationDesk,emergencyName,emergencyNumber,emergencyRelationship){
        this._firstName = firstName
        this._lastName = lastName
        this._userName = userName
        this._password = password
        this._department = department
        this._level = level
        this._companyEmail = companyEmail
        this._companyPhone = companyPhone
        this._mobileNo = mobileNo
        this._locationDesk = locationDesk
        this._emergencyName = emergencyName
        this._emergencyNumber = emergencyNumber
        this._emergencyRelationship = emergencyRelationship
        this._blockedStatus = false
        this._deleteStatus = false
        this._identifier = 0
    }
    
    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }

    get userName(){
        return this._userName
    }
    get password(){
        return this._password;
    }
    get department(){
        return this._department;
    }
    get level(){
        return this._level;
    }
    get companyEmail(){
        return this._companyEmail;
    }
    get companyPhone(){
        return this._companyPhone;
    }
    get mobileNo(){
        return this._mobileNo;
    }
    get locationDesk(){
        return this._locationDesk;
    }
    get emergencyName(){
        return this._emergencyName;
    }
    get emergencyNumber(){
        return this._emergencyNumber;
    }
    get emergencyRelationship(){
        return this._emergencyRelationship;
    }
    get blockedStatus(){
        return this._blockedStatus;
    }
    get deleteStatus(){
        return this._delete;
    }

    set firstName(newfirstName){
        this._firstName=newfirstName;
    }
    set lastName(newLastName){
        this._lastName = newLastName;
    }
    set userName(newUserName){
        this._userName = newUserName;
    }
    set password(newPassword){
        this._password = newPassword;
    }
    set department(newDepartment){
        this._department = newDepartment;
    }
    set level(newLevel){
        this._level = newLevel;
    }
    set companyEmail(newCompanyEmail){
        this._companyEmail = newCompanyEmail;
    }
    set companyPhone(newCompanyPhone){
        this._companyPhone = newCompanyPhone;
    }
    set mobileNo(newMobileNo){
        this._mobileNo = newMobileNo;
    }
    set locationDesk(newLocationDesk){
        this._locationDesk = newLocationDesk;
    }
    set emergencyName(newEmergencyName){
        this._emergencyName = newEmergencyName;
    }
    set emergencyNumber(newEmergencyNumber){
        this._emergencyNumber = newEmergencyNumber;
    }
    set emergencyRelationship(newEmergencyRelationship){
        this._emergencyRelationship = newEmergencyRelationship;
    }
    set blockedStatus(newBlockedStatus){
        this._blockedStatus = newBlockedStatus;
    }
    set deleteStatus(newDeleteStatus){
        this._deleteStatus = newDeleteStatus;
    }
    
}

/* 
    @desc retrieves a list of users from local storage
 */
function retrieveUsersLocalStorage(){
    if (JSON.parse(localStorage.getItem(USERS_KEY) == "undefined")){
        console.warn("No users in the system!")
    }else{
        try{
            for (user of JSON.parse(localStorage.getItem(USERS_KEY))){
                let newUser = new User(user._firstName,user._lastName,user._userName,user._password,user._department,user._level,user._companyEmail,user._companyPhone,user._mobileNo,user._locationDesk,user._emergencyName,user._emergencyNumber,user._emergencyRelationship)
                newUser.blockedStatus = user._blockedStatus
                users.push(newUser)
            }
        }catch(e){
            console.warn("No users in the system!"+e)
        }
        
    }
    
}

/* 
    @desc retrieves a list of notifications from local storage
 */
function retrieveNotificationsLocalStorage(){
    if (JSON.parse(localStorage.getItem(NOTIFICATIONS_KEY) == "undefined")){
        console.warn("No notifications in the system!")
    }else{
        try{
            for (notif of JSON.parse(localStorage.getItem(NOTIFICATIONS_KEY))){
                
                notif.date = new Date(notif.date)
                notification.push(notif)
            }
        }catch{
            console.warn("No notifications in the system!")
        }
    }
}
/* 
    @param retrieves a list of profile change requests from local storage
 */
function retrieveChangeRequestsLocalStorage(){
    if (JSON.parse(localStorage.getItem(CHANGE_REQUESTS_KEY) == "undefined")){
        console.warn("No change requests in the system!")
    }else{
        try{
            for (request of JSON.parse(localStorage.getItem(CHANGE_REQUESTS_KEY))){
                
                request.date = new Date(request.date)
                changeRequests.push(request)
            }
        }catch{
            console.warn("No change requests in the system!")
        }
    }
    console.log("this runs")
}
/* 
    @desc retrieves old change requests from local storage
 */
function retrieveOldChangeRequestsLocalStorage(){
    if (JSON.parse(localStorage.getItem(OLD_REQUESTS_KEY) == "undefined")){
        console.warn("No old change requests in the system!")
    }else{
        try{
            for (request of JSON.parse(localStorage.getItem(OLD_REQUESTS_KEY))){
                
                request.date = new Date(request.date)
                oldChangeRequests.push(request)
                
            }
        }catch{
            console.warn("No old change requests in the system!")
        }
    }
}

retrieveNotificationsLocalStorage()
retrieveUsersLocalStorage()
retrieveChangeRequestsLocalStorage()
retrieveOldChangeRequestsLocalStorage()