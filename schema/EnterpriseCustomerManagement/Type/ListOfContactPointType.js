var Modeler = require("../Modeler.js");
var className = 'TypeListOfContactPointType';

var TypeListOfContactPointType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ContactPoint: {
      type: "TypeContactPointType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:ContactPoint",
        type: "ContactPointType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ContactPoint: {
      type: "TypeContactPointType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:ContactPoint",
        type: "ContactPointType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfContactPointType;
Modeler.register(TypeListOfContactPointType, "TypeListOfContactPointType");
