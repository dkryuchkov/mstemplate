var Modeler = require("../Modeler.js");
var className = 'ElementSourceBusinessUnitReference';

var ElementSourceBusinessUnitReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SourceBusinessUnitReference: {
      type: "TypeBusinessUnitReferenceType",
      wsdlDefinition: {
        name: "SourceBusinessUnitReference",
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
	  SourceBusinessUnitReference: {
      type: "TypeBusinessUnitReferenceType",
      wsdlDefinition: {
        name: "SourceBusinessUnitReference",
        type: "BusinessUnitReferenceType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSourceBusinessUnitReference;
Modeler.register(ElementSourceBusinessUnitReference, "ElementSourceBusinessUnitReference");
