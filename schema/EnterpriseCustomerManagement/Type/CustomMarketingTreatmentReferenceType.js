var Modeler = require("../Modeler.js");
var className = 'TypeCustomMarketingTreatmentReferenceType';

var TypeCustomMarketingTreatmentReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomMarketingTreatmentReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomMarketingTreatmentReferenceType",
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
	  CustomMarketingTreatmentReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomMarketingTreatmentReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomMarketingTreatmentReferenceType;
Modeler.register(TypeCustomMarketingTreatmentReferenceType, "TypeCustomMarketingTreatmentReferenceType");
