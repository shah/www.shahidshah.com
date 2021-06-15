/* Contact Me and Event Invitation Form submission : #47 */
const grant_type = 'client_credentials';
const client_id = '992db982-9c8d-e22d-752a-5e9feb51ee31';
const client_secret = 'EtG$b*Aa(bS4XQK7';
const api_url = 'https://crm-test.netspective.org';
const account_id = '7a36c370-cf48-1b8c-e4be-5e9fe89e3b71';

//contact form validation
function uniqueIDGet() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}
var uniqueID = uniqueIDGet();

$(document).ready(function() {
    /* Event Invite Form */
    $("#speak-schedule-submit-btn").click(function(event) {
        $("#speak-schedule-form")[0].reportValidity();
        var full_name = $("#speak-schedule-name").val();
        var email = $("#speak-schedule-email").val();
        var event_name = $("#speak-schedule-event-name").val();
        var event_location = $("#speak-schedule-event-location").val();
        var event_desc = $("#speak-schedule-event-description").val();

        var event_form_object = {};
        if (full_name !== '')
            event_form_object['first_name'] = full_name;
        if (email != '')
            event_form_object['email1'] = email;
        if (event_name !== '')
            event_form_object['title'] = event_name;
        if (event_location !== '')
            event_form_object['primary_address_city'] = event_location;
        if (event_desc !== '')
            event_form_object['description'] = event_desc;

        if (!jQuery.isEmptyObject(event_form_object)) {
            var data = {};
            data['type'] = 'Contacts';
            data['id'] = uniqueID;
            data['attributes'] = event_form_object;
            var main_data = {};
            main_data['data'] = data;
            main_data = JSON.stringify(main_data);
        }
        if (full_name != '' && email != '' && ValidateEmail(email)) {
            suite_crm_api_calls(main_data, 'speak-schedule-form', 'speak-schedule-submit-btn', 'sh-btn-loader', 'speak-schedule-success');

        } // close if no name or email

        /* get the action attribute from the <form action=""> element */

    });

    /* Contact Form */
    $("#customer-contact-submit-btn").click(function(event) {
        $("#customer-contact-form")[0].reportValidity();
        var customer_name = $("#customer-contact-name").val();
        var customer_email = $("#customer-contact-email").val();
        var customer_subject = $("#customer-contact-subject").val();
        var customer_description = $("#customer-contact-description").val();

        var customer_form_object = {};
        if (customer_name !== '')
            customer_form_object['first_name'] = customer_name;
        if (customer_email != '')
            customer_form_object['email1'] = customer_email;
        if (customer_subject !== '')
            customer_form_object['title'] = customer_subject;
        if (customer_description !== '')
            customer_form_object['description'] = customer_description;

        if (!jQuery.isEmptyObject(customer_form_object)) {
            var data = {};
            data['type'] = 'Contacts';
            data['id'] = uniqueID;
            data['attributes'] = customer_form_object;
            var main_data = {};
            main_data['data'] = data;
            main_data = JSON.stringify(main_data);
        }
        if (customer_name != '' && customer_email != '' && ValidateEmail(customer_email)) {
            suite_crm_api_calls(main_data, 'customer-contact-form', 'customer-contact-submit-btn', 'sh-btn-loader', 'customer-contact-success');
        } // close if no name or email

        /* get the action attribute from the <form action=""> element */
    });
   /* $("#speak-schedule-form").validate({
        messages: {
            full_name: "Please enter your name",
            event_email: "Please enter a valid email address"
        }
    });
    $("#customer-contact-form").validate({
        messages: {
            name: "Please enter your name",
            email: "Please enter a valid email address"
        }
    });*/
});

function suite_crm_api_calls(data, form_id, btn_id, loader_class, success_div_id) {

    $('#' + btn_id).prop('disabled', true);
    $('.' + loader_class).removeClass('sh-hide-element');
    $('#' + btn_id).val('Please wait...');
    var form = new FormData();
    form.append("grant_type", grant_type);
    form.append("client_id", client_id);
    form.append("client_secret", client_secret);
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": api_url + "/Api/access_token",
        "method": "POST",
        "headers": {
            "Accept": "application/vnd.api+json"
        },
        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": form
    }
    $.ajax(settings).done(function(response) {

        var obj = $.parseJSON(response);
        var access_token = obj.access_token;
        var settings = {
            "url": api_url + "/Api/V8/module",
            "method": "POST",
            "headers": {
                "Accept": "application/vnd.api+json",
                "Authorization": "Bearer " + access_token + "",
                "Content-Type": "application/json"
            },
            "processData": false,
            "data": data
        }

        $.ajax(settings).done(function(response) {
            //console.log(response);
            var contactid = response.data.id;
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": api_url + "/Api/V8/module/Accounts/" + account_id + "/relationships",
                "method": "POST",
                "headers": {
                    "Accept": "application/vnd.api+json",
                    "Authorization": "Bearer " + access_token + "",
                    "Content-Type": "application/json"
                },
                "processData": false,
                "data": "{  \r\n   \"data\":{  \r\n         \"type\":\"Contacts\",\r\n         \"id\":\"" + contactid + "\"\r\n\t    \r\n      }\r\n}"
            }

            $.ajax(settings).done(function(response) {
                //console.log(response);
                if (response.meta.message != "") {
                    $('#' + form_id)[0].submit();
                    $('#' + form_id)[0].reset();
                    $('#' + btn_id).prop('disabled', false);              
                    $('#' + btn_id).val('Send');
                    $('#' + success_div_id).removeClass('sh-hide-element');
                }
            });
        });
    });
}

/* Contact Me and Event Invitation Form submission : #47 */


/*  Experience tab */
function openExp(evt, status) {
    // alert(111);
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontentExp");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinksExp");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(status).style.display = "block";
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
if (document.body.contains(document.getElementById('defaultOpenExp'))) {
    alert();
    document.getElementById("defaultOpenExp").click();
}


/* Recommendations tab*/
function openTest(evt, status) {
    //alert();
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(status).style.display = "block";
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
if (document.body.contains(document.getElementById('defaultOpen'))) {
    document.getElementById("defaultOpen").click();
}

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
    return false;
}