var Modeler = require("../Modeler.js");
var className = 'TypeCustomSpecialNeedProfileType';

var TypeCustomSpecialNeedProfileType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSpecialNeedProfileType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSpecialNeedProfileType",
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
	  CustomSpecialNeedProfileType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSpecialNeedProfileType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSpecialNeedProfileType;
Modeler.register(TypeCustomSpecialNeedProfileType, "TypeCustomSpecialNeedProfileType");
