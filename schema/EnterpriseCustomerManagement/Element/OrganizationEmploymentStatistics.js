var Modeler = require("../Modeler.js");
var className = 'ElementOrganizationEmploymentStatistics';

var ElementOrganizationEmploymentStatistics = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OrganizationEmploymentStatistics: {
      type: "TypeOrganizationEmploymentStatisticsType",
      wsdlDefinition: {
        name: "OrganizationEmploymentStatistics",
        type: "OrganizationEmploymentStatisticsType",
        "xsd:annotation": {
          "xsd:documentation": "Employment statistics of an organization"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  OrganizationEmploymentStatistics: {
      type: "TypeOrganizationEmploymentStatisticsType",
      wsdlDefinition: {
        name: "OrganizationEmploymentStatistics",
        type: "OrganizationEmploymentStatisticsType",
        "xsd:annotation": {
          "xsd:documentation": "Employment statistics of an organization"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOrganizationEmploymentStatistics;
Modeler.register(ElementOrganizationEmploymentStatistics, "ElementOrganizationEmploymentStatistics");
