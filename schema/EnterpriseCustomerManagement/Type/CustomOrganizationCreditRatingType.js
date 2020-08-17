var Modeler = require("../Modeler.js");
var className = 'TypeCustomOrganizationCreditRatingType';

var TypeCustomOrganizationCreditRatingType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomOrganizationCreditRatingType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomOrganizationCreditRatingType",
        attribute: false,
        type: "xsd:string"
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
	  CustomOrganizationCreditRatingType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomOrganizationCreditRatingType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomOrganizationCreditRatingType;
Modeler.register(TypeCustomOrganizationCreditRatingType, "TypeCustomOrganizationCreditRatingType");
