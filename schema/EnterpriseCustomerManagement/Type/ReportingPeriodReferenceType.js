var Modeler = require("../Modeler.js");
var className = 'TypeReportingPeriodReferenceType';

var TypeReportingPeriodReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ReportingPeriodIdentification: {
      type: "TypeReportingPeriodIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ReportingPeriodIdentification",
        type: "ReportingPeriodIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomReportingPeriodReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomReportingPeriodReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
	  ReportingPeriodIdentification: {
      type: "TypeReportingPeriodIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ReportingPeriodIdentification",
        type: "ReportingPeriodIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomReportingPeriodReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomReportingPeriodReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeReportingPeriodReferenceType;
Modeler.register(TypeReportingPeriodReferenceType, "TypeReportingPeriodReferenceType");
