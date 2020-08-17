var Modeler = require("../Modeler.js");
var className = 'ElementPayEquityJobClassReference';

var ElementPayEquityJobClassReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PayEquityJobClassReference: {
      type: "TypePayEquityJobClassReferenceType",
      wsdlDefinition: {
        name: "PayEquityJobClassReference",
        type: "PayEquityJobClassReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Pay Equity Job Class object.Job evaluation criteria to meet requirements set by the Pay Equity Act. It is concept set up by the Canadian government."
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
	  PayEquityJobClassReference: {
      type: "TypePayEquityJobClassReferenceType",
      wsdlDefinition: {
        name: "PayEquityJobClassReference",
        type: "PayEquityJobClassReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Pay Equity Job Class object.Job evaluation criteria to meet requirements set by the Pay Equity Act. It is concept set up by the Canadian government."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPayEquityJobClassReference;
Modeler.register(ElementPayEquityJobClassReference, "ElementPayEquityJobClassReference");
