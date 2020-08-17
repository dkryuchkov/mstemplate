var Modeler = require("../Modeler.js");
var className = 'TypeListOfKYCHistoryType';

var TypeListOfKYCHistoryType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  KYCHistory: {
      type: "TypeKYCHistoryType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:KYCHistory",
        type: "KYCHistoryType",
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
	  KYCHistory: {
      type: "TypeKYCHistoryType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:KYCHistory",
        type: "KYCHistoryType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfKYCHistoryType;
Modeler.register(TypeListOfKYCHistoryType, "TypeListOfKYCHistoryType");
