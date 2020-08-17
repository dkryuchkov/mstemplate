var Modeler = require("../Modeler.js");
var className = 'ElementQueryCriteria';

var ElementQueryCriteria = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QueryCriteria: {
      type: "TypeQueryCriteriaType",
      wsdlDefinition: {
        name: "QueryCriteria",
        type: "QueryCriteriaType",
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
	  QueryCriteria: {
      type: "TypeQueryCriteriaType",
      wsdlDefinition: {
        name: "QueryCriteria",
        type: "QueryCriteriaType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementQueryCriteria;
Modeler.register(ElementQueryCriteria, "ElementQueryCriteria");
