var Modeler = require("../Modeler.js");
var className = 'TypeCustomCollateralType';

var TypeCustomCollateralType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCollateralType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCollateralType",
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
	  CustomCollateralType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCollateralType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCollateralType;
Modeler.register(TypeCustomCollateralType, "TypeCustomCollateralType");
