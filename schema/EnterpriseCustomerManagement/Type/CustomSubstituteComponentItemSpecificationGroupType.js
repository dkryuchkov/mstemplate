var Modeler = require("../Modeler.js");
var className = 'TypeCustomSubstituteComponentItemSpecificationGroupType';

var TypeCustomSubstituteComponentItemSpecificationGroupType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSubstituteComponentItemSpecificationGroupType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSubstituteComponentItemSpecificationGroupType",
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
	  CustomSubstituteComponentItemSpecificationGroupType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSubstituteComponentItemSpecificationGroupType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSubstituteComponentItemSpecificationGroupType;
Modeler.register(TypeCustomSubstituteComponentItemSpecificationGroupType, "TypeCustomSubstituteComponentItemSpecificationGroupType");
