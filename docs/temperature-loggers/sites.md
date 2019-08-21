[Home](../index) | [Temperature Loggers](index)

List of Temperature Logger Sites
================================

The list of sites for *AIMS Temperature Loggers* is:

<div id="spinner" style="position: relative;"></div>
<div id="sites"></div>

<script src="../js/spin.min.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="../js/script.js"></script>
<script>

var spinner = new Spinner().spin();
$("#spinner").append(spinner.el);

$.get("https://api.aims.gov.au/data/v1.0/10.25845/5b4eb0f9bb848/sites")
.done(function(data) {
    spinner.stop();
    populate("Sites", "sites", data.results);
});

</script>
