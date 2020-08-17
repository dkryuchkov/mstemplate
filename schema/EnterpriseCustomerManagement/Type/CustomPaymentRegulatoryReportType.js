var Modeler = require("../Modeler.js");
var className = 'TypeCustomPaymentRegulatoryReportType';

var TypeCustomPaymentRegulatoryReportType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPaymentRegulatoryReportType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPaymentRegulatoryReportType",
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
	  CustomPaymentRegulatoryReportType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPaymentRegulatoryReportType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPaymentRegulatoryReportType;
Modeler.register(TypeCustomPaymentRegulatoryReportType, "TypeCustomPaymentRegulatoryReportType");
