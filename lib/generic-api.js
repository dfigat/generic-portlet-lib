function get_json(json_url) {
    var ret_json;
    $.ajax({
        type: "GET",
        url: json_url,
        dataType: 'json',
        success: function(data) {
            ret_json = data;
        },
        error: function(e) {
            ret_json = JSON.parse('{}');
        }
    }); 
    return ret_json; 
}

function get_app_json(app_name) {
    var ret_val;
    switch(app_name) {
        case "Galaxy":
        case "Galaxy-test": {
            ret_val = get_json('https://rawgit.com/dfigat/generic-portlet-lib/master/lib/galaxy-template.json');
            break;
        }
        case "LifeWatch":
        case "LifeWatch-test": {
            ret_val = get_json('https://rawgit.com/dfigat/generic-portlet-lib/master/lib/lifewatch-template.json');
            break;
        }
        case "GalaxyElasticCluster":
        case "GalaxyElasticCluster-test": {
            ret_val = get_json('https://rawgit.com/dfigat/generic-portlet-lib/master/lib/galaxy-elastic-cluster-template.json');
            break;
        }
        default: {
            ret_val = JSON.parse('{}');
        }
    }
    return ret_val;
}
