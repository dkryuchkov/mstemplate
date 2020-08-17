var Modeler = require("../Modeler.js");
var className = 'TypeCustomItemLotReferenceType';

var TypeCustomItemLotReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomItemLotReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemLotReferenceType",
        attribute: false,
        type: "xsd:string"
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
	  CustomItemLotReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemLotReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomItemLotReferenceType;
Modeler.register(TypeCustomItemLotReferenceType, "TypeCustomItemLotReferenceType");
