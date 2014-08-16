var locationsURL = "http://localhost:3000/locations.json"

$(document).ready(function(){
	var newPlots = {
		"<%= @location.location %>" : {
			latitude: "<%= @location.latitude %>",
			longitude: "<%= @location.longitude %>",
			//href: "locations/<% slug %>",
			//tooltip: {content : "<% location %>"}
		}
	};
	$.getJSON(locationsURL).done(function (chapter) { 
		console.log(chapter);
		_.each(chapter, function (plot) {
			console.log(plot);
			//feed coordinates into the variable above

		});
	$(".us_map").trigger("update", newPlots);
	});

 	$(".us_map").mapael({
		map : {
			name : "usa_states",
			cssClass : "map",
			tooltip : {
				cssClass : "mapTooltip" //class name of the tooltip container
			},
			defaultArea : {
				attrs : {
					fill : "#282828",
					stroke: "#9a9a9a",
				},
				attrsHover : {
					fill : "#d8ae64"
				}
			},
			defaultPlot : {
				type : "circle",
				href : "#",
				attrs: {
					fill : "#f95a61"
				}
			},
			eventHandlers: {
				click : function (){
					this.href="locations/<%= slug %>"  
				}
			}
		},
		plots: {
			'nc' : {
				latitude: 35.7806,
				longitude: -78.6389,
				tooltip: {content : "Raleigh-Durham"}
			},	
		}
	});
});

