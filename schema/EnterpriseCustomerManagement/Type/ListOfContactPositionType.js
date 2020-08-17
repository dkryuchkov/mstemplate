var Modeler = require("../Modeler.js");
var className = 'TypeListOfContactPositionType';

var TypeListOfContactPositionType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ContactPosition: {
      type: "TypeContactPositionType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:ContactPosition",
        type: "ContactPositionType",
        attribute: false,
        ns: "corecustomerpartycust"
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
	  ContactPosition: {
      type: "TypeContactPositionType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:ContactPosition",
        type: "ContactPositionType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfContactPositionType;
Modeler.register(TypeListOfContactPositionType, "TypeListOfContactPositionType");
