var Modeler = require("../Modeler.js");
var className = 'ElementParentBusinessUnitReference';

var ElementParentBusinessUnitReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentBusinessUnitReference: {
      type: "TypeBusinessUnitReferenceType",
      wsdlDefinition: {
        name: "ParentBusinessUnitReference",
        type: "BusinessUnitReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a business unit which is a parent of another business unit"
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
	  ParentBusinessUnitReference: {
      type: "TypeBusinessUnitReferenceType",
      wsdlDefinition: {
        name: "ParentBusinessUnitReference",
        type: "BusinessUnitReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a business unit which is a parent of another business unit"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentBusinessUnitReference;
Modeler.register(ElementParentBusinessUnitReference, "ElementParentBusinessUnitReference");
