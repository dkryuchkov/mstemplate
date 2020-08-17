var Modeler = require("../Modeler.js");
var className = 'ElementSoldToBusinessUnitReference';

var ElementSoldToBusinessUnitReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SoldToBusinessUnitReference: {
      type: "TypeBusinessUnitReferenceType",
      wsdlDefinition: {
        name: "SoldToBusinessUnitReference",
        type: "BusinessUnitReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The BusinessUnit which is legally responsible for payment of a business transaction such as a purchase order."
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
	  SoldToBusinessUnitReference: {
      type: "TypeBusinessUnitReferenceType",
      wsdlDefinition: {
        name: "SoldToBusinessUnitReference",
        type: "BusinessUnitReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The BusinessUnit which is legally responsible for payment of a business transaction such as a purchase order."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSoldToBusinessUnitReference;
Modeler.register(ElementSoldToBusinessUnitReference, "ElementSoldToBusinessUnitReference");
