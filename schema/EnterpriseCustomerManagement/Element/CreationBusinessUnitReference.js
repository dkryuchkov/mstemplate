var Modeler = require("../Modeler.js");
var className = 'ElementCreationBusinessUnitReference';

var ElementCreationBusinessUnitReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CreationBusinessUnitReference: {
      type: "TypeBusinessUnitReferenceType",
      wsdlDefinition: {
        name: "CreationBusinessUnitReference",
        type: "BusinessUnitReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a business unit which created the contain object/document"
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
	  CreationBusinessUnitReference: {
      type: "TypeBusinessUnitReferenceType",
      wsdlDefinition: {
        name: "CreationBusinessUnitReference",
        type: "BusinessUnitReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a business unit which created the contain object/document"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreationBusinessUnitReference;
Modeler.register(ElementCreationBusinessUnitReference, "ElementCreationBusinessUnitReference");
