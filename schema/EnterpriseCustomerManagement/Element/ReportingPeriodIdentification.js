var Modeler = require("../Modeler.js");
var className = 'ElementReportingPeriodIdentification';

var ElementReportingPeriodIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ReportingPeriodIdentification: {
      type: "TypeReportingPeriodIdentificationType",
      wsdlDefinition: {
        name: "ReportingPeriodIdentification",
        type: "ReportingPeriodIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a reporting period. A Reporting Period defines period definition for reporting purposes. Reporting periods can have relationships which may be used for roll up reporting."
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
	  ReportingPeriodIdentification: {
      type: "TypeReportingPeriodIdentificationType",
      wsdlDefinition: {
        name: "ReportingPeriodIdentification",
        type: "ReportingPeriodIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a reporting period. A Reporting Period defines period definition for reporting purposes. Reporting periods can have relationships which may be used for roll up reporting."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReportingPeriodIdentification;
Modeler.register(ElementReportingPeriodIdentification, "ElementReportingPeriodIdentification");
