[Home](../index) | [Weather](index)

List of Parameters
==================

The list of parameters is:

<div id="spinner"></div>
<div id="parameters"></div>

<script src="../js/spin.min.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="../js/script.js"></script>
<script>

var spinner = new Spinner().spin();
$("#spinner").append(spinner.el);

$.get("https://api.aims.gov.au/data/v1.0/10.25845/5c09bf93f315d/parameters")
.done(function(data) {
    spinner.stop();
    populateParameters(data);
});

</script>
