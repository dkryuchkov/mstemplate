var Modeler = require("../Modeler.js");
var className = 'TypeCustomPersonAffiliationType';

var TypeCustomPersonAffiliationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPersonAffiliationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPersonAffiliationType",
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
	  CustomPersonAffiliationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPersonAffiliationType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPersonAffiliationType;
Modeler.register(TypeCustomPersonAffiliationType, "TypeCustomPersonAffiliationType");
