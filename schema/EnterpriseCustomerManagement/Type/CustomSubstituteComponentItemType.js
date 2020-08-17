var Modeler = require("../Modeler.js");
var className = 'TypeCustomSubstituteComponentItemType';

var TypeCustomSubstituteComponentItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSubstituteComponentItemType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSubstituteComponentItemType",
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
	  CustomSubstituteComponentItemType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSubstituteComponentItemType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSubstituteComponentItemType;
Modeler.register(TypeCustomSubstituteComponentItemType, "TypeCustomSubstituteComponentItemType");
