
json.id @area.id
json.label @area.label
json.parentId @area.parent.id
json.parentType @area.parent.class.model_name.singular
json.events @area.events, partial: 'api/events/event', as: :event