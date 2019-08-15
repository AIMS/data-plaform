AIMS DataPlatform Key Request
=============================

Fill out the following form and click "Submit" to have an __AIMS DataPlatform API__ key emailed to you.

<label>Name <input id="name" name="name" type="text"></label>
<br/>
<label>Email <input id="email" type="text" name="email"></label>
<br/>
<label> Purpose
    <select name="purpose" id="purpose">
        <option value="research">Research</option>
        <option value="education">Education</option>
        <option value="commercial">Commercial</option>
        <option value="general">General</option>
        <option value="other">Other</option>
    </select>
</label>
<label>Detail <input id="purpose" type="text" name="comments"></label>
<input value="Submit" onclick="processRequest();">

<p id="success" style="display: none;">Your request was submitted, please check your email.</p>
<p id="fail" style="display: none;">Your request was not submitted, please try again later or report an error to .....</p>

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>

function processRequest() {
    var name = $("#name").val();
    var email = $("#email").val();
    var purpose = $("#purpose").val();
    var comments = $("#comments").val();
    var downloadUrl = "http://something/somewhere";    
    console.log(name, email, purpose, comments);
    
    $.post("https://api.aims.gov.au/download/key",
        {
            "name": name,
            "email": email,
            "purpose": purpose,
            "comments": comments,
            "download-url": downloadUrl
        },
        function(err) {
            console.log("Received:", err);
            $("#keyRequest").hide();
            $("#success").show();
        });
}
</script>
