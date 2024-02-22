/* 
    Name: Daniel Hong
    Version: 1.0
 */


// Buttons in HTML which will be toggled on or off depending on if they are needed
// Contains other parameters which are preallocated to be used for identifying the user which will be accessed by the admin
let userEditIdentifier = -1;
const CREATE_NEW_USER_BUTTON = `<button type="button" class="btn btn-primary" style="position:relative;" onclick="createNewUser()">Create new user</button>`;
let createNewUserContent = `
<div class="row padding-top" id="error-area">
</div>
<div class="row padding-top">
    <label for="first-name-new-user" class="col-sm-4 col-form-label">First Name:</label> 
    <div class="col-sm-7">
        <input type="text" class="form-control" id="first-name-new-user">
    </div>
</div>

<div class="row padding-inner">
    <label for="last-name-new-user" class="col-sm-4 col-form-label">Last Name:</label> 
    <div class="col-sm-7">
        <input type="text" class="form-control" id="last-name-new-user">
    </div>
</div>
<div class="row padding-inner">
    <label for="username-new-user" class="col-sm-4 col-form-label">Username:</label> 
    <div class="col-sm-7">
        <input type="text" class="form-control" id="username-new-user">
    </div>
</div>
<div class="row padding-inner">
    <label for="password-new-user" class="col-sm-4 col-form-label">Password:</label> 
    <div class="col-sm-7">
        <input type="password" class="form-control" id="password-new-user">
    </div>
</div>
<div id="password-message"></div>
<div class="row padding-inner">
<label for="department-new-user" class="col-sm-4 col-form-label">Department:</label> 
<div class="col-sm-7">
    <select class="form-select" id="department-new-user">
        <option value="" selected>Select</option>
        <option value="Sales">Sales</option>
        <option value="Admin">Admin</option>
        <option value="Supervisor">Supervisor</option>
    </select>
</div>
</div>
<div class="row padding-inner">
<label for="level-new-user" class="col-sm-4 col-form-label">Level:</label> 
<div class="col-sm-7">
    <select class="form-select" id="level-new-user">
        <option value="" selected>Select</option>
        <option value="A1">A1</option>
        <option value="A2">A2</option>
        <option value="A3">A3</option>
    </select>
</div>
</div>

<div class="row padding-inner">
    <label for="company-email-new-user" class="col-sm-4 col-form-label">Company Email:</label> 
    <div class="col-sm-7">
        <input type="email" class="form-control" id="company-email-new-user">
    </div>
</div>
<div class="row padding-inner">
    <label for="company-phone-new-user" class="col-sm-4 col-form-label">Company phone:</label> 
    <div class="col-sm-7">
        <input type="number" class="form-control" id="company-phone-new-user">
    </div>
</div>
<div class="row padding-inner">
    <label for="mobile-new-user" class="col-sm-4 col-form-label">Mobile no.:</label> 
    <div class="col-sm-7">
        <input type="number" class="form-control" id="mobile-new-user">
    </div>
</div>
<div class="row padding-inner">
    <label for="location-desk-new-user" class="col-sm-4 col-form-label">Location of desk:</label> 
    <div class="col-sm-7">
        <input type="text" class="form-control" id="location-desk-new-user">
    </div>
</div>
<hr class="solid">
<div class="row padding-inner">
    <label for="emergency-contact-name-new-user" class="col-sm-6 col-form-label">Emergency Contact name:</label> 
    <div class="col-sm-6">
        <input type="text" class="form-control" id="emergency-contact-name-new-user">
    </div>
</div>
<div class="row padding-inner">
    <label for="emergency-contact-mobile-new-user" class="col-sm-6 col-form-label">Emergency Contact number:</label> 
    <div class="col-sm-6">
        <input type="number" class="form-control" id="emergency-contact-mobile-new-user">
    </div>
</div>
<div class="row padding-inner">
    <label for="emergency-contact-relationship-new-user" class="col-sm-6 col-form-label">Emergency Contact relationship:</label> 
    <div class="col-sm-6">
        <input type="text" class="form-control" id="emergency-contact-relationship-new-user">
    </div>
</div>`;
const CLOSE_NEW_USER_BUTTON = `<button type="button" class="btn btn-outline-secondary button-height-38" style ="padding-left: 6px;padding-right: 6px;" onclick="closeNewUser()">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" style="width:24px;height:29px;padding-bottom:5px">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
</button>`;

const CLOSE_EDIT_USER_BUTTON = `<button type="button" class="btn btn-outline-secondary button-height-38" style ="padding-left: 6px;padding-right: 6px;" onclick="closeEditUser()">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" style="width:24px;height:29px;padding-bottom:5px">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
</button>`;

const SAVE_BUTTON = `<button type="button" class="btn btn-outline-secondary button-height-38" style ="padding-left: 6px;padding-right: 6px; width:38px" onclick="saveUserEdit()">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
</svg>
</button>`;
const ADD_USER_BUTTON = `<button type="button" class="btn btn-success" style="position:relative;" data-bs-toggle="modal" data-bs-target="#new-user-confirm"  >Add user</button>`;
const BLOCK_BUTTON = `<button type="button" class="btn btn-danger" style="position:relative;" data-bs-toggle="modal" data-bs-target="#block-confirm"  >Block User</button>`;
const UNBLOCK_BUTTON = `<button type="button" class="btn btn-danger" style="position:relative;" data-bs-toggle="modal" data-bs-target="#unblock-confirm"  >Unblock User</button>`;
const CHANGE_PASSWORD_BUTTON = `<button type="button" class="btn btn-warning" style="position:relative;color:white" onclick="passwordModal()">Change Password</button>`;
const DELETE_BUTTON = `<button type="button" class="btn btn-dark" style="position:relative;" data-bs-toggle="modal" data-bs-target="#delete-confirm"  >Delete User</button>`;
let departmentPreferences = "none";
let levelPreferences = "none";

/* 
    @desc small function which updates all of the user's properties of "_identifier", which is used for editing purposes */
function updateIdentifiers(){
    for (let i = 0; i<users.length;i++){
        users[0]._identifier = i
    }
}

/* 
    @desc generates the HTML required to create a new user with the relevant form(s) and button(s)
 */
function createNewUser(){
    document.getElementById("create-new-user").innerHTML = createNewUserContent
    document.getElementById("user-bottons").innerHTML = CLOSE_NEW_USER_BUTTON
    document.getElementById("create-new-user-button").innerHTML = ``
    document.getElementById("create-new-user-button-2").innerHTML = ADD_USER_BUTTON

    for (let i = 0; i<document.getElementsByName("userEditButton").length;i++){
        document.getElementsByName("userEditButton")[i].disabled = true
    }
    document.getElementById("searchPreferences").disabled = true
    
}

/* 
    @desc removes the html of creating new user 
 */
function closeNewUser(){
    document.getElementById("create-new-user").innerHTML = ``
    document.getElementById("create-new-user-button").innerHTML = CREATE_NEW_USER_BUTTON
    document.getElementById("create-new-user-button-2").innerHTML=``
    for (let i = 0; i<document.getElementsByName("userEditButton").length;i++){
        document.getElementsByName("userEditButton")[i].disabled = false
    }
    sortUserView()
    document.getElementById("error-row").innerHTML=``
    document.getElementById("user-bottons").innerHTML = ``
}

/* 
    @desc removes the html of editing a new user
 */
function closeEditUser(){
    document.getElementById("create-new-user").innerHTML = ``
    document.getElementById("create-new-user-button").innerHTML = CREATE_NEW_USER_BUTTON
    document.getElementById("user-bottons").innerHTML = ``
    document.getElementById("searchPreferences").disabled = false
    document.getElementById("button-rows").innerHTML=`<div class="row" >
    <div class="col-7 right" id="create-new-user-button-2">

    </div>
    <div class="col-5 left" id="error-row">

    </div>
    </div>`
    for (let i = 0; i<document.getElementsByName("userEditButton").length;i++){
        document.getElementsByName("userEditButton")[i].disabled = false
    }
    sortUserView()
    updateNewUserLocalStorage(users)
    
}


/* 
    @desc adds a new user to 'users'
 */
function confirmNewUser(){
    const FIRST_NAME = document.getElementById("first-name-new-user");
    const LAST_NAME = document.getElementById("last-name-new-user");
    const USERNAME = document.getElementById("username-new-user");
    const PASSWORD = document.getElementById("password-new-user");
    const DEPARTMENT = document.getElementById("department-new-user");
    const LEVEL = document.getElementById("level-new-user");
    const COMPANY_EMAIL = document.getElementById("company-email-new-user");
    const COMPANY_PHONE = document.getElementById("company-phone-new-user");
    const MOBILE_NO = document.getElementById("mobile-new-user");
    const LOCATION_OF_DESK = document.getElementById("location-desk-new-user");
    const EMERGENCY_NAME = document.getElementById("emergency-contact-name-new-user");
    const EMERGENCY_NUMBER = document.getElementById("emergency-contact-mobile-new-user");
    const EMERGENCY_RELATIONSHIP = document.getElementById("emergency-contact-relationship-new-user");

    //instantiating a user
    const USER_DETAILS = [FIRST_NAME,LAST_NAME,USERNAME,PASSWORD,DEPARTMENT,LEVEL,COMPANY_EMAIL,COMPANY_PHONE,MOBILE_NO,LOCATION_OF_DESK,EMERGENCY_NAME,EMERGENCY_NUMBER,EMERGENCY_RELATIONSHIP];
    let errorMessage = "Please fill out the entire form";
    let error = false;
    for (let i = 0;i<USER_DETAILS.length;i++){
        if (USER_DETAILS[i].value == ""){
            error = true
            break
        }  
    }

    // error checking
    if (error == false){
        users.push(new User(FIRST_NAME.value,LAST_NAME.value,USERNAME.value,PASSWORD.value,DEPARTMENT.value,LEVEL.value,COMPANY_EMAIL.value,COMPANY_PHONE.value,MOBILE_NO.value,LOCATION_OF_DESK.value,EMERGENCY_NAME.value,EMERGENCY_NUMBER.value,EMERGENCY_RELATIONSHIP.value))
        document.getElementById("error-row").innerHTML = ``
        closeNewUser()
        sortUserView()
        updateNewUserLocalStorage(users)
        
    }else{
        // error message dispaly
        document.getElementById("error-row").innerHTML = `<label for="errorMessage" style="color:red" class="visually-hidden">${errorMessage}</label><input style="color:red" type="text" readonly="" class="form-control-plaintext" id="errorMessage" value="${errorMessage}">`
    }
    updateIdentifiers()
    
}

/* 
    @desc generates the HTML with the user's information displayed
 */
function userEdit(){
    document.getElementById("create-new-user").innerHTML = createNewUserContent
    document.getElementById("first-name-new-user").value = users[userEditIdentifier].firstName
    document.getElementById("last-name-new-user").value = users[userEditIdentifier].lastName
    document.getElementById("username-new-user").value = users[userEditIdentifier].userName
    document.getElementById("password-new-user").value = users[userEditIdentifier].password
    document.getElementById("password-new-user").disabled = true
    document.getElementById("department-new-user").value = users[userEditIdentifier].department
    document.getElementById("level-new-user").value = users[userEditIdentifier].level
    document.getElementById("company-email-new-user").value = users[userEditIdentifier].companyEmail
    document.getElementById("company-phone-new-user").value = users[userEditIdentifier].companyPhone
    document.getElementById("mobile-new-user").value = users[userEditIdentifier].mobileNo
    document.getElementById("location-desk-new-user").value = users[userEditIdentifier].locationDesk
    document.getElementById("emergency-contact-name-new-user").value = users[userEditIdentifier].emergencyName
    document.getElementById("emergency-contact-mobile-new-user").value = users[userEditIdentifier].emergencyNumber
    document.getElementById("emergency-contact-relationship-new-user").value = users[userEditIdentifier].emergencyRelationship
    document.getElementById("user-bottons").innerHTML = SAVE_BUTTON+ CLOSE_EDIT_USER_BUTTON
    document.getElementById("searchPreferences").disabled = true
    document.getElementById("create-new-user-button").innerHTML = ""

    // Styling for blocked users
    if (users[userEditIdentifier]._blockedStatus == true){
        document.getElementById("error-area").innerHTML = `<h4 class="middle" style="color:red">BLOCKED</h4>`
    }else{
        document.getElementById("error-area").innerHTML = ""
    }
    for (let i = 0; i<document.getElementsByName("userEditButton").length;i++){
        document.getElementsByName("userEditButton")[i].disabled = true
    }

    // Adding the block buttons
    if(users[userEditIdentifier]._blockedStatus == true){
        buttonBlock = UNBLOCK_BUTTON
    }else{
        buttonBlock = BLOCK_BUTTON
    }
    document.getElementById("button-rows").innerHTML = `
        <div class="row">
            <div class="col d-grid" >
                ${CHANGE_PASSWORD_BUTTON}     
            </div>
            <div class="col d-grid">
                ${DELETE_BUTTON}
             </div>
             <div class="col d-grid">
                ${buttonBlock}
             </div>
            </div>`
    
}

/* 
    @desc opens the modal for saving any edits to user profile
 */
function saveUserEdit(){
    let saveUserToast = new bootstrap.Modal(document.getElementById("saveToastElement"));
    saveUserToast.show()
}

/* 
    @desc changes the user's information in 'users'
 */
function saveUserEditConfirm(){
    users[userEditIdentifier]._firstName = document.getElementById("first-name-new-user").value
    users[userEditIdentifier]._lastName =  document.getElementById("last-name-new-user").value
    users[userEditIdentifier]._userName = document.getElementById("username-new-user").value
    users[userEditIdentifier]._department = document.getElementById("department-new-user").value
    users[userEditIdentifier]._level = document.getElementById("level-new-user").value 
    users[userEditIdentifier]._companyEmail = document.getElementById("company-email-new-user").value
    users[userEditIdentifier]._companyPhone = document.getElementById("company-phone-new-user").value 
    users[userEditIdentifier]._mobileNo= document.getElementById("mobile-new-user").value 
    users[userEditIdentifier]._locationDesk = document.getElementById("location-desk-new-user").value 
    users[userEditIdentifier]._emergencyName =  document.getElementById("emergency-contact-name-new-user").value 
    users[userEditIdentifier]._emergencyNumber =  document.getElementById("emergency-contact-mobile-new-user").value
    users[userEditIdentifier]._emergencyRelationship = document.getElementById("emergency-contact-relationship-new-user").value
    sortUserView()
    closeEditUser()
    updateNewUserLocalStorage(users)

}

/* 
    @desc sets the blocked status of a user to true
 */
function blockUser(){
    users[userEditIdentifier]._blockedStatus = true
    userEdit()
    updateNewUserLocalStorage(users)
}

/* 
    @desc sets the blocked status of a user to false
 */
function unblockUser(){
    users[userEditIdentifier]._blockedStatus = false
    userEdit()
    updateNewUserLocalStorage(users)
}

/* 
    @desc deletes/removes a user from 'users'
 */
function deleteUser(){
    users.splice(userEditIdentifier,1)
    closeEditUser()
    updateNewUserLocalStorage(users)
}

/* 
    @desc opens the modal for changing passwords
 */
function passwordModal(){
    const MODAL_PASSWORD = new bootstrap.Modal(document.getElementById("change-password-confirm"));
    document.getElementById("newPassword").value = ""
    document.getElementById("newPasswordConfirm").value = ""
    document.getElementById("errorMessagePassword").innerHTML = `<br>`
    MODAL_PASSWORD.show()
    
}

/* 
    @desc changes the password of a user
 */
function changePassword(){

    first = document.getElementById("newPassword").value
    second = document.getElementById("newPasswordConfirm").value

    users[userEditIdentifier]._password = second
    document.getElementById("password-message").innerHTML= `<div class="alert alert-danger d-flex" role="alert">
    <div>
    The password has been changed. You do not need to save for the password to be changed.
    </div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
    updateNewUserLocalStorage(users)

}

/* 
    @desc checks and validates whether the password matches or not. Has error messages to assist the user
*/
function checkPassword(){
    const DEFAULT_DISABLED_BUTTON = `<button type="button" class="btn btn-warning" style="color:white" disabled>Change Password</button>`;
    let first = document.getElementById("newPassword").value;
    let second = document.getElementById("newPasswordConfirm").value;
    if (first != second){
        document.getElementById("errorMessagePassword").innerHTML = `<span style="color:red;">Passwords do not match</span>`
        document.getElementById("change-password-check").innerHTML = DEFAULT_DISABLED_BUTTON
    }else if (first == "" || second == ""){
        document.getElementById("errorMessagePassword").innerHTML = `<span style="color:red;">Please enter password(s)</span>`
        document.getElementById("change-password-check").innerHTML = DEFAULT_DISABLED_BUTTON
    }else if(first == second){
        document.getElementById("change-password-check").innerHTML = `<button type="button" class="btn btn-warning" data-bs-dismiss="modal" style="color:white" onclick ="changePassword()">Change Password</button>`
        document.getElementById("errorMessagePassword").innerHTML = `<span style="color:green;">Passwords match</span>`

    }else{
        document.getElementById("change-password-check").innerHTML = DEFAULT_DISABLED_BUTTON
    }
}

/* 
    @desc generates the HTML according to the search feature as well as search preferences that is to be displayed
 */
function sortUserView(){
    let output = "";
    for (let i = 0; i<users.length;i++){
        //Creating a generic variable for a user which is used for HTML
        table = `
        <tr>
            <td>
                ${users[i]._firstName}
            </td>
            <td>
                ${users[i]._lastName}
            </td>
            <td>
                ${users[i]._department}
            </td>
            <td>
                ${users[i]._level}
            </td>
            <td
            style=
                "border-left-width: 0px;
                padding-right: 0px;
                border-right-width: 0px;
                padding-bottom: 0px;
                padding-left: 0px;
                padding-top: 0px;
                width: 41px;"
                >
    
                <button onclick="userEditIdentifier = ${users[i]._identifier};userEdit()" type="button" class="btn" name="userEditButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                </svg>
                </button>
            </td>
        </tr>`
        users[i]._identifier = i

        // Search feature
        let enteredValue = document.getElementById("search").value;

        // If no search is performed
        if (enteredValue == ""){
            // Search preferences
            if (document.getElementById("blockedCheckBox").checked == true && users[i]._blockedStatus == true){
                if (departmentPreferences == users[i]._department && levelPreferences == users[i]._level){
                    output += table
                }else if(departmentPreferences == "none" && levelPreferences == users[i]._level){
                    output += table
                }else if (levelPreferences == "none" && departmentPreferences == users[i]._department){
                    output += table
                }else if (levelPreferences == "none" && departmentPreferences == "none"){
                    output += table
                }
                document.getElementById("searchPreferences").disabled = false
            }else if(document.getElementById("blockedCheckBox").checked == false && users[i]._blockedStatus == false){
                if (departmentPreferences == users[i]._department && levelPreferences == users[i]._level){
                    output += table
                }else if(departmentPreferences == "none" && levelPreferences == users[i]._level){
                    output += table
                }else if (levelPreferences == "none" && departmentPreferences == users[i]._department){
                    output += table
                }else if (levelPreferences == "none" && departmentPreferences == "none"){
                    output += table
                }
                document.getElementById("searchPreferences").disabled = false
            }
        // If a search is performed
        }else{
            if (users.length == 0){
                break
            }
            for (information in users[i]){
                //Non public information is excluded from this search
                if (information == "_password" || information == "_identifier" || information == "_blockedStatus" || information == "_deleteStatus"){
                    continue
                }else{
                    // Search preferences
                    if (users[i][information].includes(enteredValue)){
                        if (document.getElementById("blockedCheckBox").checked == true && users[i]._blockedStatus == true){
                            if (departmentPreferences == users[i]._department && levelPreferences == users[i]._level){
                                output += table
                            }else if(departmentPreferences == "none" && levelPreferences == users[i]._level){
                                output += table
                            }else if (levelPreferences == "none" && departmentPreferences == users[i]._department){
                                output += table
                            }else if (levelPreferences == "none" && departmentPreferences == "none"){
                                output += table
                            }
                            document.getElementById("searchPreferences").disabled = false
                        }else if(document.getElementById("blockedCheckBox").checked == false && users[i]._blockedStatus == false){
                            if (departmentPreferences == users[i]._department && levelPreferences == users[i]._level){
                                output += table
                            }else if(departmentPreferences == "none" && levelPreferences == users[i]._level){
                                output += table
                            }else if (levelPreferences == "none" && departmentPreferences == users[i]._department){
                                output += table
                            }else if (levelPreferences == "none" && departmentPreferences == "none"){
                                output += table
                            }
                            document.getElementById("searchPreferences").disabled = false
                        }
                        break
                    }
                    
                }
             
            }
        }
        
    }
    //Generating HTML
    if (output.length == 0){
        output += "<div class='middle' style='color:red'>No users in the system match the search preferences or exist!</div><br>"
        document.getElementById("errorMessageSearch").innerHTML = output
        document.getElementById("usersTable").innerHTML = ""
    }else{
        document.getElementById("usersTable").innerHTML = output
        document.getElementById("errorMessageSearch").innerHTML = ""
    }
   
    
}

/* 
    @desc resets the serach preferences
 */
function resetSearchPreferences(){
    document.getElementById("department-user-search").value = "none"
    document.getElementById("level-user-search").value = "none"
    
}

/* 
    @desc saves the search preferences which are used to sort the users view
 */
function saveSearchPreferences(){
    departmentPreferences = document.getElementById("department-user-search").value
    levelPreferences = document.getElementById("level-user-search").value
    
}

