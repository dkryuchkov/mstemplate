var Modeler = require("../Modeler.js");
var className = 'ElementParentLineOfCreditReference';

var ElementParentLineOfCreditReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentLineOfCreditReference: {
      type: "TypeLineOfCreditReferenceType",
      wsdlDefinition: {
        name: "ParentLineOfCreditReference",
        type: "LineOfCreditReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Line Of Credit object which is a parent of another line of credit.",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
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
	  ParentLineOfCreditReference: {
      type: "TypeLineOfCreditReferenceType",
      wsdlDefinition: {
        name: "ParentLineOfCreditReference",
        type: "LineOfCreditReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Line Of Credit object which is a parent of another line of credit.",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentLineOfCreditReference;
Modeler.register(ElementParentLineOfCreditReference, "ElementParentLineOfCreditReference");
