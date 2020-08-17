var Modeler = require("../Modeler.js");
var className = 'ElementSignatoryGroupReference';

var ElementSignatoryGroupReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SignatoryGroupReference: {
      type: "TypeSignatoryGroupReferenceType",
      wsdlDefinition: {
        name: "SignatoryGroupReference",
        type: "SignatoryGroupReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a  signatory group, which is a group of parties that have signing authority on a document such as a payment instrument"
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
	  SignatoryGroupReference: {
      type: "TypeSignatoryGroupReferenceType",
      wsdlDefinition: {
        name: "SignatoryGroupReference",
        type: "SignatoryGroupReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a  signatory group, which is a group of parties that have signing authority on a document such as a payment instrument"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSignatoryGroupReference;
Modeler.register(ElementSignatoryGroupReference, "ElementSignatoryGroupReference");
