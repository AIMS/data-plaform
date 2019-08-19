AIMS DataPlatform Key Request
=============================
[Back](index)

<div id="keyRequest">
<p>Fill out the following form and click "Submit" to have an <strong>AIMS DataPlatform</strong> API key emailed to you.</p>

<label>Name</label><br/>
<input id="name" name="name" type="text"><br/><br/>

<label>Email</label><br>
<input id="email" type="text" name="email"><br/><br/>

<label>Purpose</label><br/>
<select name="purpose" id="purpose">
    <option value="research">Research</option>
    <option value="education">Education</option>
    <option value="commercial">Commercial</option>
    <option value="general">General</option>
    <option value="other">Other</option>
</select><br/><br/>

<label>Comments</label><br/>
<textarea id="comments" name="comments"></textarea><br/><br/>

<div id="spinner" style="position: relative;">
    <input id="submitButton" type="button" value="Submit" onclick="processRequest();"><br/>
</div>

</div>

<div id="result"></div>

<script src="js/spin.min.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>

    var url = "https://6aq0l8l806.execute-api.ap-southeast-2.amazonaws.com/test/v1.0/key";
    //var url = "https://api.aims.gov.au/data/key";

    function processRequest() {
        var spinner = new Spinner().spin();
        $("#spinner").append(spinner.el);

        var name = $("#name").val();
        var email = $("#email").val();
        var purpose = $("#purpose").val();
        var comments = $("#comments").val();
        //console.log(name, email, purpose, comments);
        var data = { "name": name, "email": email, "purpose": purpose, "comments": comments }

            $.ajax({
                url: url,
                method: "POST",
                contentType: "application/json",
                crossDomain: true,
                data: JSON.stringify(data),
                success:
                    function(result) {
                        //console.log("Success:", result);
                        spinner.stop();
                        $("#keyRequest").hide();
                        if (result.apiKey) {
                            $("#result").append("<p>Your request was submitted, please check your email.</p>");
                            $("#result").show();
                        } else {
                            $("#result").append("<p>A pre-existing API key was found for " + result.email + "</p>");
                            $("#result").show();
                        }
                    },
                error:
                    function(xhr,status,error) {
                        //console.log(xhr, status, error);
                        spinner.stop();
                        $("#keyRequest").hide();
                        $("#result").append("<p>The request did not succeed, please try again later</p>");
                        $("#result").show();
                    }
            }
        );

    }
</script>
