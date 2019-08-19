AIMS DataPlatform Key Request
=============================


<div id="keyRequest">
<p>Fill out the following form and click "Submit" to have an <strong>AIMS DataPlatform</strong> API key emailed to you.</p>

<label>Name <input id="name" name="name" type="text"></label><br/><br/>

<label>Email <input id="email" type="text" name="email"></label><br/><br/>

<label> Purpose
    <select name="purpose" id="purpose">
        <option value="research">Research</option>
        <option value="education">Education</option>
        <option value="commercial">Commercial</option>
        <option value="general">General</option>
        <option value="other">Other</option>
    </select>
</label><br/><br/>

<label>Comments <textarea id="comments" name="comments"></textarea></label><br/><br/>

<input value="Submit" style="text-align: center;" onclick="processRequest();"><br/><br/>
</div>

<div id="result">
    <p id="success" style="display: none;">Your request was submitted, please check your email.</p>
    <p id="fail" style="display: none;">Your request was not submitted, please try again later or report an error to .....</p>
</div>

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>

    var url = "https://6aq0l8l806.execute-api.ap-southeast-2.amazonaws.com/test/v1.0/key";
    //var url = "https://api.aims.gov.au/data/key";

    function processRequest() {
        var name = $("#name").val();
        var email = $("#email").val();
        var purpose = $("#purpose").val();
        var comments = $("#comments").val();
        console.log(name, email, purpose, comments);
        var data = { "name": name, "email": email, "purpose": purpose, "comments": comments }

            $.ajax({
                url: url,
                method: "POST",
                contentType: "application/json",
                crossDomain: true,
                // processData: false,
                // dataType: 'json',
                data: JSON.stringify(data),
                success:
                    function(result) {
                        console.log("Success:", result);
                        $("#keyRequest").hide();
                        if (result.apiKey) {
                            $("#result").append("<p>Your request was submitted, please check your email.</p><p>Your new API Key is " + result.apiKey + "</p>");
                            $("#result").show();
                        } else {
                            $("#result").append("<p>A pre-existing API key was found for " + result.email + "</p>");
                            $("#result").show();
                        }
                    },
                error:
                    function(xhr,status,error) {
                        console.log(xhr, status, error);
                        $("#keyRequest").hide();
                        $("#result").append("<p>The request did not succeed, please try again later</p>");
                        $("#result").show();
                    }
            }
        );

    }
</script>
