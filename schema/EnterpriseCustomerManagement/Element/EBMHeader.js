var Modeler = require("../Modeler.js");
var className = 'ElementEBMHeader';

var ElementEBMHeader = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EBMHeader: {
      type: "TypeEBMHeaderType",
      wsdlDefinition: {
        name: "EBMHeader",
        type: "EBMHeaderType",
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
	  EBMHeader: {
      type: "TypeEBMHeaderType",
      wsdlDefinition: {
        name: "EBMHeader",
        type: "EBMHeaderType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEBMHeader;
Modeler.register(ElementEBMHeader, "ElementEBMHeader");
