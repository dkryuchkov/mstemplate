var Modeler = require("../Modeler.js");
var className = 'ElementReportingPeriodReference';

var ElementReportingPeriodReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ReportingPeriodReference: {
      type: "TypeReportingPeriodReferenceType",
      wsdlDefinition: {
        name: "ReportingPeriodReference",
        type: "ReportingPeriodReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A Reporting Period defines period definition for reporting purposes. Reporting periods can have relationships which may be used for roll up reporting."
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
	  ReportingPeriodReference: {
      type: "TypeReportingPeriodReferenceType",
      wsdlDefinition: {
        name: "ReportingPeriodReference",
        type: "ReportingPeriodReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A Reporting Period defines period definition for reporting purposes. Reporting periods can have relationships which may be used for roll up reporting."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReportingPeriodReference;
Modeler.register(ElementReportingPeriodReference, "ElementReportingPeriodReference");
