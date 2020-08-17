var Modeler = require("../Modeler.js");
var className = 'TypeCustomReportingPeriodReferenceType';

var TypeCustomReportingPeriodReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomReportingPeriodReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomReportingPeriodReferenceType",
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
	  CustomReportingPeriodReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomReportingPeriodReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomReportingPeriodReferenceType;
Modeler.register(TypeCustomReportingPeriodReferenceType, "TypeCustomReportingPeriodReferenceType");
