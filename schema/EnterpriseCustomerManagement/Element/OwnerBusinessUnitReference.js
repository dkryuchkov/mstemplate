var Modeler = require("../Modeler.js");
var className = 'ElementOwnerBusinessUnitReference';

var ElementOwnerBusinessUnitReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OwnerBusinessUnitReference: {
      type: "TypeBusinessUnitReferenceType",
      wsdlDefinition: {
        name: "OwnerBusinessUnitReference",
        type: "BusinessUnitReferenceType",
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
	  OwnerBusinessUnitReference: {
      type: "TypeBusinessUnitReferenceType",
      wsdlDefinition: {
        name: "OwnerBusinessUnitReference",
        type: "BusinessUnitReferenceType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOwnerBusinessUnitReference;
Modeler.register(ElementOwnerBusinessUnitReference, "ElementOwnerBusinessUnitReference");
