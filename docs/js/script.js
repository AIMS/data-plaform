


function populateSeries(data) {
  //console.log(data);
  $("#series").append("<h4>Series</h4>");
  $("#series").append('<table><tbody id="seriesTableBody"><tr><th>Series ID</th><th>Series Name</th></tr></tbody></table>')
  data.forEach((series) => $("#seriesTableBody").append("<tr><td>" + series.series_id + "</td><td>" + series.series_name + "</td></tr>"));
  // $("#series").append("</table>");
}

function populateSites(data) { populate("Sites", "sites", data); }

function populateParameters(data) { populate("Parameters", "parameters", data); }

function populate(title, divId, data) {
  //console.log(data);
  $("#" + divId).append("<h4>" + title + "</h4>");
  data.forEach(item => $("#" + divId).append("<p>" + item + "</p>"));
}

function newAPIKey(name, email, purpose, comments) {
  //console.log(name, email, purpose, comments);
  var data = { "name": name, "email": email, "purpose": purpose, "comments": comments }

  $.ajax({
        url: url,
        method: "POST",
        contentType: "application/json",
        crossDomain: true,
        data: data,
        success:
            function(result) {
              //console.log("Success:", result);
              $("#keyRequest").hide();
              $("#success").val("Your request was submitted, please check your email.  Your new API Key is " + result.apiKey);
              $("#success").show();

            },
        error:
            function(xhr,status,error) {
              console.log(xhr, status, error);
            }
      }
  );

}
