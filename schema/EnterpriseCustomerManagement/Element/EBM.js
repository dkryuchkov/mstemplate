var Modeler = require("../Modeler.js");
var className = 'ElementEBM';

var ElementEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EBM: {
      type: "TypeEBMType",
      wsdlDefinition: {
        name: "EBM",
        type: "EBMType",
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
	  EBM: {
      type: "TypeEBMType",
      wsdlDefinition: {
        name: "EBM",
        type: "EBMType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEBM;
Modeler.register(ElementEBM, "ElementEBM");
