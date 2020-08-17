var Modeler = require("../Modeler.js");
var className = 'ElementLaborAgreementReference';

var ElementLaborAgreementReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LaborAgreementReference: {
      type: "TypeLaborAgreementReferenceType",
      wsdlDefinition: {
        name: "LaborAgreementReference",
        type: "LaborAgreementReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Labor Agreement object. It is a contract between labor and management governing wages and benefits and working conditions."
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
	  LaborAgreementReference: {
      type: "TypeLaborAgreementReferenceType",
      wsdlDefinition: {
        name: "LaborAgreementReference",
        type: "LaborAgreementReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Labor Agreement object. It is a contract between labor and management governing wages and benefits and working conditions."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementLaborAgreementReference;
Modeler.register(ElementLaborAgreementReference, "ElementLaborAgreementReference");
