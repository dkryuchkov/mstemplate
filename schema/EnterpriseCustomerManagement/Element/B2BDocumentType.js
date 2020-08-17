var Modeler = require("../Modeler.js");
var className = 'ElementB2BDocumentType';

var ElementB2BDocumentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  B2BDocumentType: {
      type: "TypeB2BDocumentTypeType",
      wsdlDefinition: {
        name: "B2BDocumentType",
        type: "B2BDocumentTypeType",
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
	  B2BDocumentType: {
      type: "TypeB2BDocumentTypeType",
      wsdlDefinition: {
        name: "B2BDocumentType",
        type: "B2BDocumentTypeType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementB2BDocumentType;
Modeler.register(ElementB2BDocumentType, "ElementB2BDocumentType");
